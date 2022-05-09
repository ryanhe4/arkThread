import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'arks'
})
export class Ark {
  @PrimaryGeneratedColumn()
  id: number

  @Index()
  @Column()
  username: string

  @Column()
  title: string

  @Column()
  contents: string

  @Column({ length: 255, nullable: false })
  password_hash: string

  @Column()
  ip: string

  @Column({ default: 0 })
  vote: number

  @Index()
  @CreateDateColumn()
  created_at!: Date

  serialize() {
    const { created_at, ...rest } = this
    return rest
  }
}

docker exec -it mariadb_db_1 bash
mysql -u root -p
create database arkthread;
grant all privileges on arkthread.* TO 'arkthread'@'%' identified by 'ARKTHREADLOGIN!';
flush privileges;


# Database creation, along with a single table plus some entries.
create database alpha;

use alpha;

create table display ( ID int NOT NULL, MESSAGE varchar(255) NOT NULL, PRIMARY KEY (ID) );

insert into display (ID, MESSAGE) values ( 001, "My lovely Daniel");
insert into display (ID, MESSAGE) values ( 002, "My Uncle Ita");
insert into display (ID, MESSAGE) values ( 003, "Papito Lairton");
insert into display (ID, MESSAGE) values ( 004, "Papa Tomato Sapao");
insert into display (ID, MESSAGE) values ( 005, "Mama Bruschetta");

# SELinux policy to enable processes to read/execute.
chcon -Rt svirt_sandbox_file_t <volume-path>

# Runnning MySQL database indicating a volume, and initial user ROOT password .
docker run --name mysql-db -v <volume-path>:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=x3po -d mysql:5.7.23

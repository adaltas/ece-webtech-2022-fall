---
duration: 1h
---

# Storage and databases | with Supabase

## What is a database

* Organized collection of data
* Store, access and manage data
* Not a one type fits all scenario

## Types of databases

* Relational Database Management System (RDBMS, basis for SQL): MySQL, PostgreSQL, Hive, Oracle
* NoSQL:
  * Filesystems: POSIX and object storage
  * Documents store: MongoDB, ElasticSearch
  * Key/value and sorted key/value stores: LevelDB, Redis
  * Column families: HBase, Cassandra
  * Graph DBs: JanusGraph (ex-TitanDB), Neo4J

## PostgreSQL

* RDBMS and object-relational database
* Pronounced POST-gress, QL is silent
* Open-source database
* Active development since 1986!
* High performance out of the box
* Featured packed: JSON support, geospatial features, ...
* Support stored procedures in 12 languages
* Roles, privileges, and schema
* Row-level security (RLS)

## Row-level security (RLS)

* Enable the restrictions on data row access
* Remove the middleware requirement for the database exposed through a REST API like PostgREST
* Supabase relies heavily on policies
* Policies are flexible:
  * Using the characteristics of the user query (role, execution context, ...)
  * Complex business logic involving multiple tables
  * Execution context (eg: the current date)

## RLS usage

* Enable RLS
  ```sql
  alter table posts enable row level security;
  ````
* Restrict inserts
  ```sql
  create policy "Individuals can create posts." on posts for
      insert with check (auth.uid() = user_id);
  ```
* Restrict updates
  ```sql
  create policy "Individuals can update their own posts." on posts for
      update using (auth.uid() = user_id);
  ```
* Restrict removals
  ```sql
  create policy "Individuals can delete their own posts." on posts for
      delete using (auth.uid() = user_id);
  ```
* Restrict access
  ```sql
  create policy "Posts are public." on posts for
      select using (true);
  ```

## Supabase

* Open-source Firebase alternative
* Use the PostgreSQL database
* Leverage RLS policies
* REST and GraphQL APIs
* OAuth integration
* Listen to database changes
* Self-hosted and managed deployments
* Simple and convenient admin Desktop UI
* Comes with client libraries
* JAMStack compatible

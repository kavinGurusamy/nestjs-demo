import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1734351272854 implements MigrationInterface {
    name = 'Migrations1734351272854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" number GENERATED BY DEFAULT AS IDENTITY, "email" varchar2(255) NOT NULL, "isActive" number NOT NULL, "name" varchar2(50) NOT NULL, "role" number NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" number GENERATED BY DEFAULT AS IDENTITY, "name" varchar2(50) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" number GENERATED BY DEFAULT AS IDENTITY, "isActive" number NOT NULL, "name" varchar2(50) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" number GENERATED BY DEFAULT AS IDENTITY, "description" varchar2(50) NOT NULL, "isActive" number NOT NULL, "name" varchar2(50) NOT NULL, "status" number NOT NULL, "category_id" number, "user_id" number, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_tags" ("task_id" number NOT NULL, "tag_id" number NOT NULL, CONSTRAINT "PK_a7354e3c3f630636f6e4a29694a" PRIMARY KEY ("task_id", "tag_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_70515bc464901781ac60b82a1e" ON "task_tags" ("task_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_f883135d033e1541f6a81972e7" ON "task_tags" ("tag_id")`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_5a2a57aed53e11558e410ddb44d" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_6ea2c1c13f01b7a383ebbeaebb0" FOREIGN KEY ("user_id") REFERENCES "user" ("id")`);
        await queryRunner.query(`ALTER TABLE "task_tags" ADD CONSTRAINT "FK_70515bc464901781ac60b82a1ea" FOREIGN KEY ("task_id") REFERENCES "task" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "task_tags" ADD CONSTRAINT "FK_f883135d033e1541f6a81972e7d" FOREIGN KEY ("tag_id") REFERENCES "tag" ("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_tags" DROP CONSTRAINT "FK_f883135d033e1541f6a81972e7d"`);
        await queryRunner.query(`ALTER TABLE "task_tags" DROP CONSTRAINT "FK_70515bc464901781ac60b82a1ea"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_6ea2c1c13f01b7a383ebbeaebb0"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_5a2a57aed53e11558e410ddb44d"`);
        await queryRunner.query(`DROP INDEX "IDX_f883135d033e1541f6a81972e7"`);
        await queryRunner.query(`DROP INDEX "IDX_70515bc464901781ac60b82a1e"`);
        await queryRunner.query(`DROP TABLE "task_tags"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

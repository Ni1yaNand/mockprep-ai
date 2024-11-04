import { text, varchar, serial } from "drizzle-orm/pg-core"; 
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mock_interview", {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition', 255).notNull(),     
    jobDesc: varchar('jobDesc', 255).notNull(),
    jobExperience: varchar('jobExperience', 255).notNull(),
    createdBy: varchar('createdBy', 255).notNull(),
    createdAt: varchar('createdAt', 255).notNull(),
    mockId: varchar('mockId', 255).notNull(),
});

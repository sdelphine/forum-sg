import { Module } from "@nestjs/common";
import { TopicsModule } from "./topics/topics.module";
import { MessagesModule } from "./messages/messages.module";

@Module({
    imports: [
        TopicsModule,
        MessagesModule
    ]
})
export class AppModule {}
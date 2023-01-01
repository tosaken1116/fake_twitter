import { List } from "@mui/material";
import MessageRequest from "./MessagaRequest";
import MessageRow from "./MessageRow";

export default function Message() {
    const demoData = [
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            lastContact: "2022/11/22",
            isLocked: true,
            icon: "/cat1.png",
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            lastContact: "2022/11/22",
            isLocked: true,
            icon: "/cat1.png",
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            lastContact: "2022/11/22",
            isLocked: true,
            icon: "/cat1.png",
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            lastContact: "2022/11/22",
            isLocked: true,
            icon: "/cat1.png",
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            lastContact: "2022/11/22",
            isLocked: true,
            icon: "/cat1.png",
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            lastContact: "2022/11/22",
            isLocked: true,
            icon: "/cat1.png",
        },
    ];
    return (
        <List>
            <MessageRequest requestNumber={1} />
            {demoData.map(
                ({
                    userName,
                    userId,
                    context,
                    lastContact,
                    isLocked,
                    icon,
                }) => (
                    <MessageRow
                        userName={userName}
                        userId={userId}
                        context={context}
                        lastContact={lastContact}
                        isLocked={isLocked}
                        icon={icon}
                    ></MessageRow>
                )
            )}
        </List>
    );
}

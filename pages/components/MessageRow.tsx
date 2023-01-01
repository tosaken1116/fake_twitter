import LockIcon from "@mui/icons-material/Lock";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { MessageRowProps } from "../Type/Type";

export default function MessageRow({
    userId,
    userName,
    lastContact,
    isLocked,
    context,
    icon,
}: MessageRowProps) {
    return (
        <Stack direction="row" p={1}>
            <Box p={1}>
                <Image
                    src={icon}
                    alt="icon"
                    width={60}
                    height={60}
                    className="rounded-full "
                />
            </Box>
            <Stack p={1}>
                <Stack direction="row">
                    <Typography>{userName}</Typography>
                    {isLocked && (
                        <LockIcon
                            sx={{ fontSize: "16px", alignSelf: "center" }}
                        />
                    )}{" "}
                    <Typography>@{userId}</Typography>
                    <Typography>・{lastContact}</Typography>
                </Stack>
                <Typography>{context}</Typography>
            </Stack>
        </Stack>
    );
}

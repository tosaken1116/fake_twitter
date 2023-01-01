import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Stack, Typography } from "@mui/material";
import { MessageRequestProps } from "../Type/Type";
export default function MessageRequest({ requestNumber }: MessageRequestProps) {
    return (
        <Stack direction="row" p={1}>
            <Box p={1}>
                <Box
                    sx={{
                        width: "60px",
                        height: "60px",
                        border: "solid 1px #dddddd",
                        borderRadius: "9999px",
                        position: "relative",
                    }}
                >
                    <MailOutlineIcon
                        sx={{
                            position: "absolute",
                            left: "12px",
                            top: "10px",
                            fontSize: "36px",
                        }}
                    />
                </Box>
            </Box>
            <Stack p={1}>
                <Typography>メッセージリクエスト</Typography>
                <Typography>
                    知り合いかもしれない{requestNumber}人のユーザー
                </Typography>
            </Stack>
        </Stack>
    );
}

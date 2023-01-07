import AddCircleIcon from "@mui/icons-material/AddCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PublicIcon from "@mui/icons-material/Public";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { Box, Button, CircularProgress, Divider, Stack } from "@mui/material";
import { TweetMakeFooterProps } from "../Type/Type";
export default function TweetFooter({ tweetTextLength }: TweetMakeFooterProps) {
    return (
        <Stack>
            <Box>
                <Button startIcon={<PublicIcon />}>全員が返信できます</Button>
            </Box>
            <Stack direction="row" sx={{}}>
                <Stack direction="row" spacing={3} flexGrow={1}>
                    <SignalCellularAltIcon />

                    <InsertPhotoIcon />
                    <GifBoxOutlinedIcon />
                    <BarChartIcon className="rotate-90" />
                    <PlaceOutlinedIcon />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <CircularProgress
                        variant="determinate"
                        value={(tweetTextLength / 140) * 100}
                        size={20}
                        sx={{ width: "16px", height: "16px", fontSize: "8px" }}
                    />
                    <Divider orientation="vertical" />
                    <AddCircleIcon />
                </Stack>
            </Stack>
        </Stack>
    );
}

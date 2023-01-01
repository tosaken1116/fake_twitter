import { Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function Search() {
    const [selectedcategory, setSelectedcategory] = useState(0);
    return (
        <Stack>
            <Tabs
                scrollButtons="auto"
                indicatorColor="primary"
                variant="scrollable"
                value={selectedcategory}
            >
                <Tab
                    label="おすすめ"
                    onClick={() => setSelectedcategory(0)}
                ></Tab>
                <Tab
                    label="トレンド"
                    onClick={() => setSelectedcategory(1)}
                ></Tab>
                <Tab
                    label="ニュース"
                    onClick={() => setSelectedcategory(2)}
                ></Tab>
                <Tab
                    label="スポーツ"
                    onClick={() => setSelectedcategory(3)}
                ></Tab>
                <Tab
                    label="エンターテイメント"
                    onClick={() => setSelectedcategory(4)}
                ></Tab>
            </Tabs>
        </Stack>
    );
}

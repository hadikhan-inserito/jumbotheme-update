import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Masonry/demo-code/ssr-masonry.txt";

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SSRMasonry = () => {
    return (
        <JumboDemoCard title={"SSR Masonry"} demoCode={code}>
            <Div sx={{width: 500, minHeight: 393}}>
                <Masonry
                    columns={4}
                    spacing={2}
                    defaultHeight={450}
                    defaultColumns={4}
                    defaultSpacing={1}
                >
                    {heights.map((height, index) => (
                        <Item key={index} sx={{height}}>
                            {index + 1}
                        </Item>
                    ))}
                </Masonry>
            </Div>
        </JumboDemoCard>
    );
};
export default SSRMasonry;

import { Card } from "@mui/material";

export default function Slide({ src }) {
    return (
        <Card sx={{
            display: 'flex',
            width: '750px',
            height: '475px',
        }}>
            <img src={src} />
        </Card>
    )
}

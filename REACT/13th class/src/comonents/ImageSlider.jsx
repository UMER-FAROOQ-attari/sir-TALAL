import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

function ImageSlider() {
    const items = [
        {
            imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            title: "Sunset View"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
            title: "Mountain Landscape"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            title: "Ocean Waves"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=800&q=80",
            title: "City Night Lights"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
            title: "Forest Path"
        }
    ];

    return (
        <Box sx={{ maxWidth: 900, width: '100%', margin: '0 auto', mt: 5 }}>
            <Carousel
                autoPlay={true}               // خود بخود slide
                interval={3000}               // 3 seconds per slide
                animation="slide"             // slide animation
                indicators={true}             // dots نیچے دکھائیں
                navButtonsAlwaysVisible={true} // arrows ہمیشہ دکھائیں
                stopAutoPlayOnHover={false}  // hover par rukna nahi chahiye
                swipe={true}                  // mobile swipe enable
            >
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </Carousel>
        </Box>
    );
}

function Item({ item }) {
    return (
        <Box
            component="img"
            src={item.imgUrl}
            alt={item.title}
            sx={{
                width: '100%',
                height: { xs: '250px', sm: '350px', md: '450px' }, // responsive
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
            }}
        />
    );
}

export default ImageSlider;

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

function ImageSlider() {
    // 1. تصاویر کی لسٹ (اپنی تصاویر کے لنکس یہاں ڈالیں)
    const items = [
        {
            imgUrl: "https://via.placeholder.com/800x400?text=Slide+1",
            title: "پہلی تصویر"
        },
        {
            imgUrl: "https://via.placeholder.com/800x400?text=Slide+2",
            title: "دوسری تصویر"
        },
        {
            imgUrl: "https://via.placeholder.com/800x400?text=Slide+3",
            title: "تیسری تصویر"
        }
    ];

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', mt: 5 }}>
            <Carousel
                autoPlay={true}       // خود بخود چلنے کے لیے
                animation="slide"     // سلائیڈ ایفیکٹ (fade بھی ہو سکتا ہے)
                indicators={true}     // نیچے نقطے (dots) دکھانے کے لیے
                navButtonsAlwaysVisible={true} // سائیڈ والے تیر (arrows) ہمیشہ دکھانے کے لیے
            >
                {
                    items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))
                }
            </Carousel>
        </Box>
    )
}

function Item({ item }) {
    return (
        <Box 
            component="img"
            src={item.imgUrl}
            alt={item.title}
            sx={{
                width: '100%',
                height: '400px',    
                objectFit: 'cover', 
                borderRadius: '10px' 
            }}
        />
    )
}

export default ImageSlider;
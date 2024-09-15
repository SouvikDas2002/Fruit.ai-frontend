import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  const cardsData = [
    {
      title: 'Chatbot',
      link: '/chatbot',
      image: '/assets/chat.jpg',
    },
    {
      title: 'Translator',
      link: '/translator',
      image: '/assets/translate.png',
    },
    {
      title: 'FAQ',
      link: '/faq',
      image: '/assets/faqs.png',
    },
    {
      title: 'About',
      link: '/about',
      image: '/assets/about.jpg',
    },
  ];

  return (
    <Box
      sx={{
        padding: 3,
        textAlign: 'center',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
      }}
      
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Fruit.ai
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 3,
          maxWidth: '1200px',
          width: '100%',
          justifyItems: 'center',
          marginTop: 5,
        }}
      >
        {cardsData.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: '100%',
              maxWidth: '300px',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              boxShadow: 4,
              textDecoration:"none",
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 10,
              },
            }}
            component={Link} to={card.link}
          >
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h5" component="div" fontWeight={"bold"}>
                {card.title}
              </Typography>
              <Button
                component={Link}
                to={card.link}
                sx={{
                  background: 'linear-gradient(45deg, #000000 30%, #4f4f4f 90%)',
                  color: 'yellow',
                  marginTop: 2,
                  '&:hover': {
                    backgroundColor: '#1e88e5',
                  },
                  borderRadius: '20px',
                  padding: '8px 16px',
                }}
              >
                Explore {card.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;

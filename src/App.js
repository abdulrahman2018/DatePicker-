import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Typography, Button, Card, CardContent, Box, Grid, Paper } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    alert(`Selected Date: ${selectedDate ? selectedDate.toLocaleDateString() : 'None'}`);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: '10vh', // Centers vertically
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={10} sx={{ padding: 4, borderRadius: 3, backgroundColor: '#f5f5f5', width: '100%' }}>
        <Card sx={{ boxShadow: 5, padding: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                color: '#3f51b5',
                fontWeight: 'bold',
                letterSpacing: 1,
                marginBottom: 3,
              }}
            >
              Choose Your Date
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
              <CalendarToday sx={{ fontSize: 60, color: '#3f51b5' }} />
            </Box>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select a date"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="date-picker"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '18px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#3f51b5')}
                  onBlur={(e) => (e.target.style.borderColor = '#ddd')}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth
                  sx={{
                    padding: 1.5,
                    fontSize: '18px',
                    borderRadius: 3,
                    backgroundColor: '#3f51b5',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                      transform: 'scale(1.05)',
                    },
                    transition: 'transform 0.2s ease',
                    marginTop: 2,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>

            {selectedDate && (
              <Typography
                variant="body1"
                sx={{
                  marginTop: 3,
                  textAlign: 'center',
                  color: '#4caf50',
                  fontWeight: 'bold',
                }}
              >
                You selected: {selectedDate.toLocaleDateString()}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
}

export default App;

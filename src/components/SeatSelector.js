import React, { useState } from "react";

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const selectedSeat = `${rowIndex}-${seatIndex}`;
    const isSelected = selectedSeats?.includes(selectedSeat);
    if (isSelected) {
      setSelectedSeats(selectedSeats?.filter((seat) => seat !== selectedSeat));
    } else {
      if (selectedSeats?.length >= 2) {
        console.log(selectedSeats);
        const [firstSelectedSeat, ...restSelectedSeats] = selectedSeats;
        setSelectedSeats([...restSelectedSeats, selectedSeat]);
      } else {
        setSelectedSeats([...selectedSeats, selectedSeat]);
      }
    }
  };

  return (
    <div className="seat-selector-container">
      <h2>Choose your seats</h2>
      <div className="seat-layout">
        {Array(6)
          .fill()
          .map((rowVal, rowIndex) => (
            <div className="seat-row" key={rowIndex}>
              {Array(10)
                .fill()
                .map((seatVal, seatIndex) => {
                  const seatNumber = rowIndex * 10 + seatIndex + 1;
                  const selectedSeat = `${rowIndex}-${seatIndex}`;
                  const isSelected = selectedSeats?.includes(selectedSeat);
                  return (
                    <div
                      className={`seat ${isSelected ? "selected" : ""} `}
                      key={seatIndex}
                      onClick={() => handleSeatClick(rowIndex, seatIndex)}
                    >
                      {isSelected ? seatNumber : ""}
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeatSelector;

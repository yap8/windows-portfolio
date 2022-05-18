import { useEffect, useState } from 'react';
import date from 'date-and-time';

import Button from '../Button';

const Time: React.FC = () => {
  const [time, setTime] = useState(date.format(new Date(), 'hh:mm A'));

  useEffect(() => {
    setInterval(() => {
      const now = new Date();

      setTime(date.format(now, 'hh:mm A'));
    }, 1000);
  }, []);

  return (
    <Button className="cursor-default" active={true}>
      {time}
    </Button>
  );
};

export default Time;

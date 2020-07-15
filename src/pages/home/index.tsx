import React, { FC } from 'react';

interface IHomeProps {
  history: any;
}

const HomePage: FC<IHomeProps> = () => {
  return (
    <div>
      <p>this is home</p>
    </div>
  )
}

export default HomePage;
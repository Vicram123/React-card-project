import * as React from 'react';

import { Routes, Route} from 'react-router-dom';
import Card from './Card';
import ProfilePage from './ProfilePage';



export default function App() {
  return (
      <Routes>
    <Route path="/" element={<Card />} />
     <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />

      </Route>
    </Routes>
  );
}
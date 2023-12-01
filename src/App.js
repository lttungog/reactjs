import React from "react";
import './css/styles.css';
import Student from "./component/Student";

const students = [
  {
    id: 1,
    name: "Brandy Romero",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    email: "brandy.romero@example.com"
  },
  {
    id: 2,
    name: 'Adam Cunningham',
    image: 'https://randomuser.me/api/portraits/men/63.jpg',
    email: 'adam.cunningham@example.com'
  },
  {
    id: 3,
    name: 'Landon Burke',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    email: 'landon.burke@example.com'
  },
  {
    id: 4,
    name: 'Rick Morales',
    image: 'https://randomuser.me/api/portraits/men/0.jpg',
    email: 'rick.morales@example.com'
  },
  {
    id: 5,
    name: 'Anne Wells',
    image: 'https://randomuser.me/api/portraits/women/61.jpg',
    email: 'anne.wells@example.com'
  }
]

export default function StudentsList() {
  return (
      <div>
          <div>
              <div>
                  {students.map((item, index) => (
                      <div key={index}>
                              <Student {...item} />
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

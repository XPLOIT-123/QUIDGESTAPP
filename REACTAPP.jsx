import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { title: "The Story Behind My App", content: "Add your app's origin story here" },
  { title: "Who is My Client?", content: "Describe your target audience" },
  { title: "Main Objectives of the App", content: "List your app's goals" },
  { title: "App's Main Features", content: "Highlight key functionalities" },
  { title: "Did You Propose the Goal That You Proposed?", content: "Discuss goal achievement" },
  { title: "Relational Model", content: "Insert your relational model diagram here" },
  { title: "Let's See a Demo", content: "Add instructions or screenshots for your demo" },
];

const Slide = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 text-blue-600">{title}</h2>
    <p className="text-xl text-gray-700">{content}</p>
  </div>
);

const AppPresentationTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
      <Slide {...slides[currentSlide]} />
      <div className="flex justify-between w-full max-w-3xl mt-8">
        <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 text-gray-600">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
};

export default AppPresentationTemplate;
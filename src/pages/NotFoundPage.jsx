import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { notFoundPageText } from "../constants/constants";
import { useText } from "../context/useText";

export const NotFoundPage = () => {
    const text = useText(notFoundPageText);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
      <h1 className="text-2xl font-semibold mb-2">{text[0]}</h1>
      <p className="text-gray-500 mb-4">{text[1]}</p>
      <Link to="/" className="text-blue-600 hover:underline">
        {text[2]}
      </Link>
    </div>
  );
};


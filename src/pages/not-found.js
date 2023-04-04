import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title='Not Found - Instagram';
    },[])
  return (
    <div className="bg-gray-background flex justify-center">
      <div className="mx-auth  max-w-screen-lg">
        <h1 className="text-2xl"> NotFound!</h1>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat, Heart } from "lucide-react";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane to protect their eyes.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFact(catFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">All About Cats</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Cat className="mr-2 text-blue-500" /> Cat Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-blue-800">{currentFact}</p>
              <Button onClick={getRandomFact} className="bg-blue-500 hover:bg-blue-600 text-white">Get Another Fact</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700">Cat Image</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
                alt="Cute cat" 
                className="w-full h-64 object-cover rounded-md"
              />
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-700">Why We Love Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 mb-4 text-blue-800">
              <li>They're independent yet affectionate</li>
              <li>They're low-maintenance pets</li>
              <li>They have unique personalities</li>
              <li>They're great stress-relievers</li>
              <li>They're natural hunters and playful</li>
            </ul>
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setLikes(likes + 1)}
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white border-blue-600"
              >
                <Heart className="mr-2 h-6 w-6 text-red-300" />
                Like Cats ({likes})
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

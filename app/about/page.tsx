import DeployButton from '@/components/DeployButton';
import Header from '@/components/Header';
import NavBar from '@/components/NavigationBar';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <NavBar/>
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-2">
            <span className="font-bold text-5xl mb-4">About Our Product</span>
          </h2>
          <p className="text-lg">
            Welcome to our product, Oletai. We are excited to introduce you to our innovative solution designed to simplify your life.
          </p>
          <p className="text-lg">
            Oletai is here to address your everyday challenges, making tasks more manageable and efficient. Whether you are at home or work, our product is tailored to meet your needs.
          </p>
          <p className="text-lg">
            Explore the features and capabilities of Oletai and discover how it can make your life easier. If you have any questions or feedback, please don't hesitate to contact us.
          </p>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-2 flex justify-center text-center text-md bg-white text-blue-900 space-x-2 align-center">
        <p className="text-lg pt-2">Powered by</p>
        <DeployButton />
      </footer>
    </div>
  );
};

export default AboutPage;

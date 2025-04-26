import React from 'react';
import { MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

const DonationInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg mx-auto max-w-4xl space-y-6">
      <div className="flex items-start md:items-center space-y-4 md:space-x-6 md:space-y-0">
        <UsersIcon className="h-12 w-12 text-green-600" />
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Team:</h3>
          <p className="text-gray-600 text-lg">Julia Pudrosky</p>
        </div>
      </div>

      <div className="flex items-start md:items-center space-y-4 md:space-x-6 md:space-y-0">
        <MapPinIcon className="h-12 w-12 text-green-600" />
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Location:</h3>
          <p className="text-gray-600 text-lg">Gaza</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6 md:mt-4">
        100% of your donation supports those in need.
      </p>
    </div>
  );
};

export default DonationInfo;

import React from 'react';

const Profile = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Your Profile</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-2xl font-bold">
                        JD
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Jane Doe</h2>
                        <p className="text-gray-500">Member since Dec 2025</p>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Preferences</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="text-sm text-gray-500">Dietary Type</div>
                            <div className="font-medium text-gray-900">Vegetarian</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="text-sm text-gray-500">Allergies</div>
                            <div className="font-medium text-gray-900">Peanuts</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <button className="text-red-600 font-medium hover:text-red-700">Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;

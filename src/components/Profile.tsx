import React from 'react';
import LogoutClick from '../HandleClickFunctions/LoginClicksFunction/LogoutClick';
import NavigationFunctions from '../HandleClickFunctions/NavigationClickFunctions/NavigationFunctions';
import { LogOut, Coins, User } from 'lucide-react';
import { BlackButton } from './Button/CustomButtons';
import useGetUserStoreData from '../Hooks/useGetUserStoreData';
import useGetUserCredits from '../Hooks/userGetUserCredits';
import RecentImages from './RecentImages';
import { useSelector } from 'react-redux';
const Profile: React.FC = () => {
  const navigate = NavigationFunctions();
  const generateimage=useSelector((state:any)=>state.generateimageslength.totalimages)
  const [userdata] = useGetUserStoreData();
  const useremail = userdata?.email;
  const username = useremail?.split('@')[0];
  const credits = useGetUserCredits();

  return (
    <div className="min-h-screen pt-24 pb-16 flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-3 place-content-center ">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-gray/30 rounded-2xl p-6 space-y-6">
              {/* Profile Info */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-primary-purple/20 rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-primary-purple" />
                </div>
                <h2 className="text-2xl font-bold mb-1">{username}</h2>
                <p className="text-gray-400">{useremail}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid place-items-center py-4 grid-cols-2 gap-4 border-y border-secondary-gray">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-purple">{credits}</div>
                  <div className="text-sm text-gray-400">Credits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-purple">{generateimage}</div>
                  <div className="text-sm text-gray-400">Generated</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <BlackButton
                  text={
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <Coins className="w-5 h-5 text-secondary-green mr-3" />
                        <span>Buy Credits</span>
                      </div>
                      <span className="text-primary-purple">{credits} left</span>
                    </div>
                  }
                  handleclick={() => {
                    navigate.customnavigation('/pricing');
                  }}
                  extraclassName="w-full"
                />

                <BlackButton
                  text={
                    <div className="flex items-center text-red-400">
                      <LogOut className="w-5 h-5 mr-3" />
                      <span>Logout</span>
                    </div>
                  }
                  handleclick={() => {
                    LogoutClick().then(() => {
                      window.location.reload();
                      navigate.customnavigation('/');
                    });
                  }}
                  extraclassName="w-full"
                />
              </div>
            </div>
          </div>

          {/* Recent Images */}
          <div className="lg:col-span-2 relative lg:bottom-16 hidden md:block">
            <RecentImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user_id");

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <div className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button 
                variant="ghost" 
                className="text-white hover:text-slate-200" 
                onClick={() => navigate("/")}
              >
                Home
              </Button>
            </NavigationMenuItem>
            {isLoggedIn && (
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-slate-200" 
                  onClick={() => navigate("/my-papers")}
                >
                  My Papers
                </Button>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4">
          {isLoggedIn ? (
            <Button 
              variant="outline"
              className="bg-white text-slate-800 hover:bg-slate-200 hover:text-slate-900 transition" 
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button 
              variant="outline"
              className="text-white hover:text-slate-200 border-white hover:border-slate-200" 
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;


interface MenuDataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus: {
      link: string;
      title: string;
  }[];
}[]

const MenuData: MenuDataType[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    has_dropdown: false, 
    sub_menus: []
   
  },
  {
    id: 2,
    title: "Department",
    link: "#",
    has_dropdown: false, 
     sub_menus: []
  },
  {
    id: 3,
    title: "About",
    link: "#",
    has_dropdown: false, 
    sub_menus: []
    // sub_menus: [
    //   { link: "/doctor",                      title: "Doctors 01",},  
    //   { link: "/doctor-2",                    title: "Doctors 02",},  
    //   { link: "/doctor-details",              title: "Doctors Details",},  
    // ],
  }, 
  {
    id: 4,
    title: "Courses",
    link: "#",
    has_dropdown: false, 
    sub_menus: []
    // sub_menus: [
    //   { link: "/shop",                        title: "Shop Page",},   
    //   { link: "/product-details",             title: "Shop Details",},   
    //   { link: "/cart",                        title: "Shopping Cart",},   
    //   { link: "/checkout",                    title: "Checkout",},   
    //   { link: "/wishlist",                    title: "Wishlist",},   
    //   { link: "/login",                       title: "Login",},   
    //   { link: "/register",                    title: "Register",},   
    // ],
  },
  {
    id: 5,
    title: "Admission",
    link: "#",
    has_dropdown: false, 
    sub_menus: []
    // sub_menus: [
    //   { link: "/blog",                        title: "Blog Right Sidebar",},    
    //   { link: "/blog-left-sidebar",           title: "Blog Left Sidebar",},    
    //   { link: "/blog-no-sidebar",             title: "Blog No Sidebar",},    
    //   { link: "/blog-2-col",                  title: "Blog 2 Column",},    
    //   { link: "/blog-2-col-mas",              title: "Blog 2 Col Masonry",},    
    //   { link: "/blog-3-col",                  title: "Blog 3 Column",},    
    //   { link: "/blog-3-col-mas",              title: "Blog 3 Col Masonry",},    
    //   { link: "/blog-details",                title: "Blog Details",},    
    //   { link: "/blog-details-left-sidebar",   title: "Details Left Sidebar",},    
    //   { link: "/blog-details-audio",          title: "Details Audio",},    
    //   { link: "/blog-details-video",          title: "Details Video",},    
    //   { link: "/blog-details-gallery",        title: "Details Gallery",},    
    // ],
  }, 
  {
    id: 6,
    title: "Events",
    link: "#",
    has_dropdown: false, 
    sub_menus: []
    // sub_menus: [
    //   { link: "/about",                        title: "About",},     
    //   { link: "/appoinment",                   title: "Appoinment",},     
    //   { link: "/portfolio-2",              title: "Portfolio 2 column",},     
    //   { link: "/portfolio",                    title: "Portfolio 3 column",},     
    //   { link: "/portfolio-slider",             title: "Portfolio Slider",},     
    //   { link: "/contact",                      title: "Contact",},     
    // ],
  }, 
  {
    id: 7,
    title: "Panchkarma",
    link: "/panchakarma",
    has_dropdown: false, 
    sub_menus: []
    // sub_menus: [
    //   { link: "/doctor",                      title: "Doctors 01",},  
    //   { link: "/doctor-2",                    title: "Doctors 02",},  
    //   { link: "/doctor-details",              title: "Doctors Details",},  
    // ],
  }, 
];
export default MenuData;

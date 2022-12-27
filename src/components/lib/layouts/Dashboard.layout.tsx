import c from "./DashboardLayout.module.scss";

interface IDashboardLayout{
    sideMenu: React.ReactNode;
    children: React.ReactNode | React.ReactNode[];
 }

const DashboarLayout = ({ sideMenu, children }: IDashboardLayout) => {
    return (
        <div className={c.dashoboard_layout}>
            <div className={c.side_menu}>
                {sideMenu}
            </div>
            <div className={c.content}>
                {children}
            </div>
        </div>
    );
};

export default DashboarLayout;

import BottomBar from '@/components/common/BottomBar';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/footer';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <div className="layout">
                {children}
            </div>
            <BottomBar />
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
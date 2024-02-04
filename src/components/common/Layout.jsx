
import BottomBar from '@/components/common/BottomBar';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/footer';
import { AuthProvider } from '@/providers/AuthProviser';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Navbar />
                <div className="layout">
                    {children}
                </div>
                <BottomBar />
                <Footer />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default Layout
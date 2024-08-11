
import BottomBar from '@/components/common/BottomBar';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/footer';
import { AuthProvider } from '@/providers/AuthProviser';
import theme from '@/theme';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from '@emotion/react';
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <NextNProgress color="#f00" startPosition={0} stopDelayMs={0} height={10} showOnShallow={true} />
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
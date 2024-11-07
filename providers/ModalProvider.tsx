"use client";

import { useState, useEffect } from "react";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

interface ModalProviderProps {
    children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
            {children}
        </>
    );
}

export default ModalProvider;

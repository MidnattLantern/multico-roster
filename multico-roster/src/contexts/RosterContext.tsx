import { createContext, ReactNode, useContext, useState } from "react";

interface RosterContextType {
    selectedCharacter: number;
    setSelectedCharacter: React.Dispatch<React.SetStateAction<number>>;
}

const RosterContext = createContext<RosterContextType | undefined>(undefined);

interface RosterContextProps {
    children: ReactNode;
}

export const RosterContextProvider: React.FC<RosterContextProps> = ({ children }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<number>(0);

    return (
    <RosterContext.Provider value={{
        selectedCharacter,
        setSelectedCharacter
    }}>
        {children}
    </RosterContext.Provider>
    );
};

// eslint-disable-next-line
export const useRoster = () => {
    const context = useContext(RosterContext);
    if (!context) {
        throw new Error("useRoster must be used within a RosterContextProvider");
    }
    return context;
};
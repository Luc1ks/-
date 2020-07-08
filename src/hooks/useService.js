import { useState, useCallback } from 'react';

export default function useService() {
    const [isLoading, setIsLoading] = useState(false);
    
    const request = useCallback( async (serviceFunc, needLoading) => {
        if (needLoading) {
            setIsLoading(true);
        }   
        const result = await serviceFunc();
        setIsLoading(false);
        return result;
    }, [])

    return {request, isLoading}
}
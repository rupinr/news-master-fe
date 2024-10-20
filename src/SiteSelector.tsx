import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface SiteSelectorProps {
    options: Option[];
    defaultOptions: Option[];
    onSiteChange: (updatedSites: Option[]) => void;
}

export interface Option {
    label: string;
    value: string;
}

const SiteSelector: React.FC<SiteSelectorProps> = ({ options, defaultOptions, onSiteChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>(defaultOptions);
    const [allOptions, setAllOptions] = useState<Option[]>(options);

    useEffect(() => {
        setAllOptions(options);
    }, [options]);

    useEffect(() => {
        setSelectedOptions(defaultOptions);
    }, [defaultOptions]);


    const handleUpdate = (event: any, newValue: Option[]) => {
        setSelectedOptions(newValue);
        setAllOptions(allOptions.filter(item => !selectedOptions.includes(item)))
        onSiteChange(newValue);
    };

    return (
        <div>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={allOptions}
                value={selectedOptions}
                getOptionLabel={(option) => option.label}
                onChange={handleUpdate}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Sites"
                        placeholder="Sites"
                    />
                )}
            />
        </div>
    );
};

export default SiteSelector;

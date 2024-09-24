// Define the type for the field
type Field = {
    label: string;
    name: string;
    type: string;
    options?: string[]; // For select inputs
    required?: boolean;
  };
  
  // Define the dynamic fields for each service
  const serviceFields: { [key: string]: Field[] } = {
    tables: [
      {
        label: 'Choose a Lux.Fino Table',
        name: 'luxFinoTable',
        type: 'select',
        options: ['Table 1', 'Table 2', 'Table 3'],
        required: true,
      },
      {
        label: 'Choose your picnic aesthetic',
        name: 'picnicAesthetic',
        type: 'select',
        options: ['Boho', 'Rustic', 'Modern'],
        required: true,
      },
      {
        label: 'Add-Ons',
        name: 'addOns',
        type: 'checkbox',
        options: ['Live Music', 'Photography', 'Extra Hour'],
      },
    ],
    // ...other services
  };
  
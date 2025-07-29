import { BlogPost } from '../blog-posts';

export const adSchema: BlogPost = {
  id: "ad-schema",
  title: "Active Directory Schema",
  category: "activedirectory",
  content: `
# Active Directory Schema

The Active Directory schema defines the structure and rules for objects that can be stored in the Active Directory database. Understanding the schema is crucial for extending and customizing your AD environment.

## What is Active Directory Schema?

The schema is a blueprint that defines what types of objects can be created in Active Directory and what attributes those objects can have. It acts as a rulebook that ensures data consistency and integrity across the directory.

### Schema Components

#### Object Classes
Object classes define the types of objects that can be created in Active Directory, such as:
- **User**: Represents user accounts
- **Computer**: Represents computer accounts  
- **Group**: Represents security and distribution groups
- **Organizational Unit**: Container objects for organizing other objects

#### Attributes
Attributes define the properties that objects can have:
- **Mandatory Attributes**: Required properties that must be populated
- **Optional Attributes**: Properties that can be left empty
- **Single-valued**: Can contain only one value
- **Multi-valued**: Can contain multiple values

## Schema Management

### Schema Master
The schema master is the domain controller responsible for schema modifications. Only one schema master exists per forest.

### Schema Modifications
- Schema changes are forest-wide and irreversible
- Require Schema Admin privileges
- Should be thoroughly tested before implementation
- Use tools like ADSI Edit or PowerShell for modifications

### Best Practices
- Always backup before schema changes
- Test in a lab environment first
- Document all custom schema extensions
- Follow Microsoft naming conventions
`,
  headings: [
    { id: "what-is-active-directory-schema", text: "What is Active Directory Schema?", level: 2 },
    { id: "schema-components", text: "Schema Components", level: 3 },
    { id: "object-classes", text: "Object Classes", level: 4 },
    { id: "attributes", text: "Attributes", level: 4 },
    { id: "schema-management", text: "Schema Management", level: 2 },
    { id: "schema-master", text: "Schema Master", level: 3 },
    { id: "schema-modifications", text: "Schema Modifications", level: 3 },
    { id: "best-practices", text: "Best Practices", level: 3 },
  ]
};
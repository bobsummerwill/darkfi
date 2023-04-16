window.SIDEBAR_ITEMS = {"enum":[["BlockType","Represents a block type."],["CanonicalFunction","Represents a canonical function in a WebAssembly component."],["CanonicalOption","Represents options for component functions."],["Chunk","A successful return payload from [`Parser::parse`]."],["ComponentAlias","Represents an alias in a WebAssembly component."],["ComponentDefinedType","Represents a defined type in a WebAssembly component."],["ComponentExternalKind","Represents the kind of an external items of a WebAssembly component."],["ComponentFuncResult","Represents the result type of a component function."],["ComponentInstance","Represents an instance in a WebAssembly component."],["ComponentName","Represents a name read from the names custom section."],["ComponentOuterAliasKind","Represents the kind of an outer alias in a WebAssembly component."],["ComponentType","Represents a type in a WebAssembly component."],["ComponentTypeDeclaration","Represents part of a component type declaration in a WebAssembly component."],["ComponentTypeRef","Represents a reference to a component type."],["ComponentValType","Represents a value type in a WebAssembly component."],["CoreType","Represents a core type in a WebAssembly component."],["CustomSectionKind","Represents known custom section kinds."],["DataKind","The kind of data segment."],["ElementItem","Represents an individual item of an element segment."],["ElementKind","The kind of element segment."],["Encoding","The supported encoding formats for the parser."],["ExternalKind","External types as defined here."],["FrameKind","The kind of a control flow [`Frame`]."],["Instance","Represents an instance of a WebAssembly module."],["InstanceTypeDeclaration","Represents an instance type declaration in a WebAssembly component."],["InstantiationArgKind","Represents the kind of an instantiation argument for a core instance."],["LinkingType","Represents a linking type."],["ModuleTypeDeclaration","Represents a module type declaration in a WebAssembly component."],["Name","Represents a name read from the names custom section."],["Operator","Instructions as defined here."],["OuterAliasKind","Represents the kind of an outer core alias in a WebAssembly component."],["Payload","Values that can be parsed from a WebAssembly module or component."],["PrimitiveValType","Represents a primitive value type."],["RelocType","Represents a relocation type."],["SectionCode","Section code as defined here."],["TagKind","Represents a tag kind."],["Type","Represents a type in a WebAssembly module."],["TypeBounds","Represents the type bounds for imports and exports."],["TypeRef","Represents a reference to a type definition in a WebAssembly module."],["ValType","Represents the types of values in a WebAssembly module."],["ValidPayload","Possible return values from [`Validator::payload`]."]],"fn":[["validate","Test whether the given buffer contains a valid WebAssembly module or component, analogous to `WebAssembly.validate` in the JS API."]],"macro":[["for_each_operator","A helper macro to conveniently iterate over all opcodes recognized by this crate. This can be used to work with either the [`Operator`] enumeration or the [`VisitOperator`] trait if your use case uniformly handles all operators the same way."]],"mod":[["types","Types relating to type information provided by validation."]],"struct":[["BinaryReader","A binary reader of the WebAssembly structures and types."],["BinaryReaderError","A binary reader for WebAssembly modules."],["BrTable","A br_table entries representation."],["CodeSectionReader","A reader for the code section of a WebAssembly module."],["ComponentAliasSectionReader","A reader for the alias section of a WebAssembly component."],["ComponentCanonicalSectionReader","A reader for the canonical section of a WebAssembly component."],["ComponentExport","Represents an export in a WebAssembly component."],["ComponentExportSectionReader","A reader for the export section of a WebAssembly component."],["ComponentFuncType","Represents a type of a function in a WebAssembly component."],["ComponentImport","Represents an import in a WebAssembly component"],["ComponentImportSectionReader","A reader for the import section of a WebAssembly component."],["ComponentInstanceSectionReader","A reader for the component instance section of a WebAssembly component."],["ComponentInstantiationArg","Represents an argument to instantiating a WebAssembly component."],["ComponentNameSectionReader","A reader for the name custom section of a WebAssembly module."],["ComponentStartFunction","Represents the start function in a WebAssembly component."],["ComponentStartSectionReader","A reader for the start section of a WebAssembly component."],["ComponentTypeSectionReader","A reader for the type section of a WebAssembly component."],["ConstExpr","Represents an initialization expression."],["CoreTypeSectionReader","A reader for the core type section of a WebAssembly component."],["CustomSectionReader","A reader for custom sections of a WebAssembly module."],["Data","Represents a data segment in a core WebAssembly module."],["DataSectionReader","A reader for the data section of a WebAssembly module."],["Element","Represents a core WebAssembly element segment."],["ElementItems","Represents the items of an element segment."],["ElementItemsIterator","An iterator over element items in an element segment."],["ElementItemsReader","A reader for element items in an element segment."],["ElementSectionReader","A reader for the element section of a WebAssembly module."],["Export","Represents an export in a WebAssembly module."],["ExportSectionReader","A reader for the export section of a WebAssembly module."],["Frame","A Wasm control flow block on the control flow stack during Wasm validation."],["FuncToValidate","Resources necessary to perform validation of a function."],["FuncType","Represents a type of a function in a WebAssembly module."],["FuncValidator","Validation context for a WebAssembly function."],["FuncValidatorAllocations","External handle to the internal allocations used during function validation."],["FunctionBody","Represents a WebAssembly function body."],["FunctionSectionReader","A reader for the function section of a WebAssembly module."],["Global","Represents a core WebAssembly global."],["GlobalSectionReader","A reader for the global section of a WebAssembly module."],["GlobalType","Represents a global’s type."],["Ieee32","An IEEE binary32 immediate floating point value, represented as a u32 containing the bit pattern."],["Ieee64","An IEEE binary64 immediate floating point value, represented as a u64 containing the bit pattern."],["Import","Represents an import in a WebAssembly module."],["ImportSectionReader","A reader for the import section of a WebAssembly module."],["IndirectNameMap","Represents a reader for indirect names from the names custom section."],["IndirectNaming","Represents an indirect name in the names custom section."],["InstanceSectionReader","A reader for the core instance section of a WebAssembly component."],["InstantiationArg","Represents an argument to instantiating a WebAssembly module."],["IntoIterWithOffsets","An iterator over a limited section iterator."],["LinkingSectionReader","A reader for the linking custom section of a WebAssembly module."],["LocalsIterator","An iterator over locals in a function body."],["LocalsReader","A reader for a function body’s locals."],["MemArg","Represents a memory immediate in a WebAssembly memory instruction."],["MemorySectionReader","A reader for the memory section of a WebAssembly module."],["MemoryType","Represents a memory’s type."],["NameMap","Represents a name map from the names custom section."],["NameSectionReader","A reader for the name custom section of a WebAssembly module."],["Naming","Represents a name for an index from the names section."],["OperatorsIterator","An iterator over a function’s operators."],["OperatorsIteratorWithOffsets","An iterator over a function’s operators with offsets."],["OperatorsReader","A reader for a core WebAssembly function’s operators."],["Parser","An incremental parser of a binary WebAssembly module or component."],["ProducersField","A field from the producers custom section."],["ProducersFieldValue","Represents a field value in the producers custom section."],["ProducersFieldValuesIterator","An iterator over fields in the producers custom section."],["ProducersFieldValuesReader","A reader for fields in the producers custom section."],["ProducersSectionReader","A reader for the producers custom section of a WebAssembly module."],["Reloc","Represents a relocation entry."],["RelocSectionReader","A reader for the relocations custom section of a WebAssembly module."],["SectionIterator","An iterator over items in a section."],["SectionIteratorLimited","An iterator over a limited section iterator."],["TableSectionReader","A reader for the table section of a WebAssembly module."],["TableType","Represents a table’s type."],["TagSectionReader","A reader for the tags section of a WebAssembly module."],["TagType","A tag’s type."],["TypeSectionReader","A reader for the type section of a WebAssembly module."],["V128","Represents a 128-bit vector value."],["Validator","Validator for a WebAssembly binary module or component."],["ValidatorResources","The implementation of [`WasmModuleResources`] used by `Validator`."],["VariantCase","Represents a case in a variant type."],["WasmFeatures","Flags for features that are enabled for validation."],["WasmFuncTypeInputs","Iterator over the inputs of a Wasm function type."],["WasmFuncTypeOutputs","Iterator over the outputs of a Wasm function type."]],"trait":[["SectionReader","A trait implemented by section readers."],["SectionWithLimitedItems","Implemented by sections with a limited number of items."],["VisitOperator","Trait implemented by types that can visit all [`Operator`] variants."],["WasmFuncType","Types that qualify as Wasm function types for validation purposes."],["WasmModuleResources","Types that qualify as Wasm validation database."]],"type":[["Result","The result for `BinaryReader` operations."]]};
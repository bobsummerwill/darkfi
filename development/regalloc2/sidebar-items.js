window.SIDEBAR_ITEMS = {"enum":[["AllocationKind","An allocation is one of two “kinds” (or “none”): register or spillslot/stack."],["Edit","An instruction to insert into the program to perform some data movement."],["InstOrEdit","Wrapper around either an original instruction or an inserted edit."],["InstPosition","A position before or after an instruction at which we can make an edit."],["OperandConstraint","An `OperandConstraint` specifies where a vreg’s value must be placed at a particular reference to that vreg via an `Operand`. The constraint may be loose – “any register of a given class”, for example – or very specific, such as “this particular physical register”. The allocator’s result will always satisfy all given constraints; however, if the input has a combination of constraints that are impossible to satisfy, then allocation may fail or the allocator may panic (providing impossible constraints is usually a programming error in the client, rather than a function of bad input)."],["OperandKind","The “kind” of the operand: whether it reads a vreg (Use), writes a vreg (Def), or reads and then writes (Mod, for “modify”)."],["OperandPos","The “position” of the operand: where it has its read/write effects. These are positions “in” the instruction, and “early” and “late” are relative to the instruction’s main effect or computation. In other words, the allocator assumes that the instruction (i) performs all reads and writes of “early” operands, (ii) does its work, and (iii) performs all reads and writes of its “late” operands."],["RegAllocError","An error that prevents allocation."],["RegClass","Register classes."]],"fn":[["run","Run the allocator."]],"macro":[["define_index",""]],"mod":[["checker","Checker: verifies that spills/reloads/moves retain equivalent dataflow to original, VReg-based code."],["indexset","Index sets: sets of integers that represent indices into a space."],["ssa","SSA-related utilities."]],"struct":[["Allocation","An Allocation represents the end result of regalloc for an Operand."],["Block",""],["Inst",""],["InstRange",""],["InstRangeIter",""],["MachineEnv","A machine environment tells the register allocator which registers are available to allocate and what register may be used as a scratch register for each class, and some other miscellaneous info as well."],["Operand","An `Operand` encodes everything about a mention of a register in an instruction: virtual register number, and any constraint that applies to the register at this program point."],["Output","The output of the register allocator."],["OutputIter","Iterator over the instructions and edits in a block."],["PReg","A physical register. Contains a physical register number and a class."],["PRegSet","A physical register set. Used to represent clobbers efficiently."],["PRegSetIter",""],["ProgPoint","A program point: a single point before or after a given instruction."],["RegallocOptions","Options for allocation."],["SpillSlot","A spillslot is a space in the stackframe used by the allocator to temporarily store a value."],["VReg","A virtual register. Contains a virtual register number and a class."]],"trait":[["Function","A trait defined by the regalloc client to provide access to its machine-instruction / CFG representation."]]};
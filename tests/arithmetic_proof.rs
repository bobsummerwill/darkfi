use darkfi::{
    crypto::{
        proof::{ProvingKey, VerifyingKey},
        Proof,
    },
    zk::{
        vm::{Witness, ZkCircuit},
        vm_stack::empty_witnesses,
    },
    zkas::decoder::ZkBinary,
    Result,
};
use pasta_curves::pallas;
use rand::rngs::OsRng;

#[test]
fn arithmetic_proof() -> Result<()> {
    /* ANCHOR: main */
    let bincode = include_bytes!("../proof/arithmetic.zk.bin");
    let zkbin = ZkBinary::decode(bincode)?;

    // ======
    // Prover
    // ======

    // Witness values
    let a = pallas::Base::from(42);
    let b = pallas::Base::from(69);

    let prover_witnesses = vec![Witness::Base(Some(a)), Witness::Base(Some(b))];

    // Create the public inputs
    let sum = a + b;
    let product = a * b;
    let difference = a - b;

    let public_inputs = vec![sum, product, difference];

    // Create the circuit
    let circuit = ZkCircuit::new(prover_witnesses, zkbin.clone());

    let proving_key = ProvingKey::build(11, &circuit);
    let proof = Proof::create(&proving_key, &[circuit], &public_inputs, &mut OsRng)?;

    // ========
    // Verifier
    // ========

    // Construct empty witnesses
    let verifier_witnesses = empty_witnesses(&zkbin);

    // Create the circuit
    let circuit = ZkCircuit::new(verifier_witnesses, zkbin);

    let verifying_key = VerifyingKey::build(11, &circuit);
    proof.verify(&verifying_key, &public_inputs)?;
    /* ANCHOR_END: main */

    Ok(())
}

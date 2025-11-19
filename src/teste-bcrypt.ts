import bcrypt from "bcryptjs";

async function testar() {
    const senhaOriginal = "1234";
    const hash = await bcrypt.hash(senhaOriginal, 10);

    console.log("Hash:", hash);

    const ok1 = await bcrypt.compare("1234", hash);
    console.log("Comparação correta:", ok1);

    const ok2 = await bcrypt.compare("senhaErrada", hash);
    console.log("Comparação incorreta:", ok2);
}

testar();

export default {
    computed: {
        trocaEspacoPorVirgula() {
            return this.message.replaceAll(" ", ",");
        },
        contarCaracteresMostrarTamanho() {
            const arr = this.message.split(" ");

            arr.map((element, index) => {
                arr[index] = element + ` (${element.length}) `;
            });

            return arr.join("");
        },
    },
}
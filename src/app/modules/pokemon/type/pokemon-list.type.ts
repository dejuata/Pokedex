export class PokemonListDescriptor {
  public next: string;
  public results: Array<any> = [];

  public static import(rawData: any) {
    let list = new PokemonListDescriptor();
    list.next = rawData.next;

    for (let i = 0; i < rawData.results.length; i++) {
      list.results.push(rawData.results[i]);
    }

    return list;
  }

}
export class PokemonDetailsDescriptor {
  public id: number;
  public name: string;
  public stats: any[] = [];


  public static import(rawData: any) {
    let pokemon: PokemonDetailsDescriptor = new PokemonDetailsDescriptor();
    let stats = ['hp', 'attack', 'defense', 'speed'];

    pokemon.id = rawData.id;
    pokemon.name = rawData.name;

    for(let i = 0; i < rawData.stats.length; i++) {
      if (stats.includes(rawData.stats[i].stat.name)) {
        pokemon.stats.push({
          key: rawData.stats[i].stat.name,
          value: rawData.stats[i].base_stat
        })
      }
    }
    return pokemon;
  }
}

export class PokemonListDescriptor {
  public id: number;
  public name: string;
  public stats: any[] = [];


  public static import(rawData: any) {
    let pokemon: PokemonListDescriptor = new PokemonListDescriptor();

    pokemon.id = rawData.id;
    pokemon.name = rawData.name;
    let stats = ['hp', 'attack', 'defense', 'speed']
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

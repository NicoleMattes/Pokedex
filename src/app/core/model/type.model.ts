export interface Type {
    damage_relations: {
      double_damage_from: [
        {
          name: string,
          url: string
        }
      ],
      double_damage_to: [
        {
          name: string,
          url: string
        }
      ],
      half_damage_from: [
        {
          name: string,
          url: string
        }
      ],
      half_damage_to: [
        {
          name: string,
          url: string
        }
      ],
      no_damage_from: [],
      no_damage_to: []
    },
    game_indices: [
      {
        game_index: number,
        generation: {
          name: string,
          url: string
        }
      }
    ],
    generation: {
      name: string,
      url: string
    },
    id: number,
    move_damage_class: {
      name: string,
      url: string
    },
    moves: [
      {
        name: string,
        url: string
      }
    ],
    name: string,
    names: [
      {
        language: {
          name: string,
          url: string
        },
        name: string
      }
    ],
    past_damage_relations: any[],
    pokemon: [
      {
        pokemon: {
          name: string,
          url: string
        },
        slot: number
      }
    ]
}

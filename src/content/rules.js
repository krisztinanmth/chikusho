const rules = [
    { rule: 'Any live cell with fewer than two live neighbors dies, as if by underpopulation.',
      id: 1   },
        
    {rule: 'Any live cell with two or three live neighbors lives on to the next generation.', 
     id: 2   },

    { rule: 'Any live cell with more than three live neighbors dies, as if by overpopulation.',
      id: 3  },

    { rule: 'Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.',
      id: 4  },
 
];

export default rules
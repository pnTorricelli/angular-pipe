import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): unknown {
    let val: number;
    let outputTemp: number;

    if (!value) {
      return value;
    }

    if (typeof value === 'string')
      val = parseFloat(value);
    else
      val = value;

    if (inputType === "cel" && outputType === 'fah')
      outputTemp = val * (9 / 5) + 32;
    else if (inputType === "fah" && outputType === 'cel')
      outputTemp = (val - 32) * (5 / 9);
    else
      outputTemp = val

    const symbolType = outputType ?? inputType;
    let symbol: '°F' | '°C';

    if (symbolType === 'fah')
      symbol = '°F';
    else
      symbol = '°C';

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}

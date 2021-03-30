using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FirstWinForms_GIM
{
    public partial class Form1 : Form
    {
        public Form1(MainWindow mainWindow)
        {
            InitializeComponent();
        }
        

        private void label2_TextChanged(object sender, EventArgs e)
        {
                
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string path = @"C:\Users\Stach\Desktop\git\klasa2\desktopowe(c#)\FirstWinForms_GIM\FirstWinForms_GIM\bin\Debug\net5.0-windows\dane.txt";

            if (!File.Exists(path))
            {
                string createText = "Tekst z pliku dane.txt: " + Environment.NewLine;
                File.WriteAllText(path, createText);
            }
            string readText = File.ReadAllText(path);
            textBox1.Text = readText;
        }
    }
}
